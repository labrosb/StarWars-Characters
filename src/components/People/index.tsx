import React, { useState, useEffect, useCallback, useRef } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from '../../state/store';
import { getPeople } from '../../state/slices/peopleSlice';
import { getPlanetsMap } from '../../state/slices/planetsSlice';
import { selectSortedPeople, selectFilteredPeople } from '../../state/selectors/peopleSelectors';
import SpinnerIcon from '../Common/Spinner';
import PlanetModal from '../Planet/PlanetModal';
import PeopleTable from './PeopleTable';
import {
  Container,
  Header,
  Content,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from './People.UI';
import type { SortPeopleBy, SortType } from '../../state/selectors/peopleSelectors';

const People: React.FC = () => {
  const dispatch = useDispatch();
  // Flag to use as a workaround of react 18
  // causing useEffect to execute twice on dev
  const mounted = useRef(false);

  const [sortBy, setSortBy] = useState<SortPeopleBy>('name');
  const [sortType, setSortType] = useState<SortType>('DESC');
  const [searchText, setSearchText] = useState('');
  const [selectedPlanetKey, setSelectedPlanetKey] = useState('');
  const [showPlanetModal, setShowPlanetModal] = useState(false);

  // Table data
  const filteredPeople = useSelector((state) => selectFilteredPeople(state, searchText));
  const people = selectSortedPeople(filteredPeople, sortBy, sortType);
  const planets = useSelector((state) => (state.planets));

  // Retrieve table data -> People and then planet data
  useEffect(() => {
    if (mounted.current === false) {
      dispatch(getPeople())
      .then(() => dispatch(getPlanetsMap()));
    }
    mounted.current = true;
  }, []);

  // Update state params to be passed in the selector
  const setSortingParams = useCallback((row: SortPeopleBy): void => {
    if (row === sortBy) {
      const type = sortType === 'ASC' ? 'DESC' : 'ASC';
      setSortType(type);
    } else {
      setSortBy(row);
      setSortType('DESC');
    }
  }, [sortType]);

  const showPlanetDetails = useCallback((key: string): void => {
    setSelectedPlanetKey(key);
    setShowPlanetModal(true);
    console.log('show modal');
    // Show modal
  }, []);

  if (!people.length) {
    return (
      <Container>
        <Header>Star Wars Characters</Header>
        <SpinnerIcon $height={60} $marginTop={28}/>
      </Container>
    );
  }

  return (
    <Container>
      <Header>Star Wars Characters</Header>
      <Content>
        <SearchContainer>
          <SearchInput placeholder="Search" onChange={(e) => setSearchText(e.target.value)} />
          <SearchIcon icon={faSearch} />
        </SearchContainer>
        <PeopleTable
          onRowsSort={setSortingParams}
          onPlanetClick={showPlanetDetails}
          {...{ people, planets}}
        />
      </Content>
      <PlanetModal
        planet={planets[selectedPlanetKey] || {}}
        isOpen={showPlanetModal}
        onClose={() => setShowPlanetModal(false)}
      />
    </Container>
  );
}

export default People;

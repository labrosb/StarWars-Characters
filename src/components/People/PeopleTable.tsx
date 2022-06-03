import React, { useState } from 'react';
import { faSort, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '../../utils/date';
import SpinnerIcon from '../Common/Spinner';
import {
  Table,
  HeaderRow,
  Row,
  Column,
  Box,
  LoadingBox,
  LinkBox,
  Text,
  TitleIcon,
  MoreButton,
  MoreIcon,
} from './PeopleTable.UI';
import type { PersonState } from '../../state/slices/peopleSlice';
import type { PlanetsState } from '../../state/slices/planetsSlice';
import type { SortPeopleBy } from '../../state/selectors/peopleSelectors';

type SortIconProps = { onClick: React.MouseEventHandler<SVGSVGElement> }

type Props = {
  people: PersonState[];
  planets: PlanetsState;
  onRowsSort: (row: SortPeopleBy) => void;
  onPlanetClick: (key: string) => void;
}

const minimizedItems = 10;

const SortIcon: React.FC<SortIconProps> = ({ onClick }) => (
  <TitleIcon icon={faSort} {...{ onClick }} />
);

const PeopleTable: React.FC<Props> = ({
  people,
  planets,
  onRowsSort,
  onPlanetClick,
}) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const peopleView = showAllItems ? people : people.slice(0, minimizedItems);

  return (
    <>
      <Table>
        <HeaderRow>
          <Column>
            <Text>Name</Text>
            <SortIcon onClick={() => onRowsSort('name')} />
          </Column>
          <Column $width={650}>
            <Text>Height</Text>
            <SortIcon onClick={() => onRowsSort('height')} />
          </Column>
          <Column $width={650}>
            <Text>Mass</Text>
            <SortIcon onClick={() => onRowsSort('mass')} />
          </Column>
          <Column $responsive>
            <Text>Edited</Text>
            <SortIcon onClick={() => onRowsSort('edited')} />
          </Column>
          <Column $responsive>
            <Text>Created</Text>
            <SortIcon onClick={() => onRowsSort('created')} />
          </Column>
          <Column>
            <Box>
              <Text>Planet</Text>
              <SortIcon onClick={() => onRowsSort('homeworld')} />
            </Box>
          </Column>
        </HeaderRow>
        {peopleView.map((person, index) => (
          <Row key={person.id} $special={index % 2 === 1}>
            <Column>
              <Text>{person.name}</Text>
            </Column>
            <Column $width={650}>
              <Text>{person.height}</Text>
            </Column>
            <Column $width={650}>
              <Text>{person.mass }</Text>
            </Column>
            <Column $responsive>
              <Text>{formatDate(person.edited)}</Text>
            </Column>
            <Column $responsive>
              <Text>{formatDate(person.created)}</Text>
            </Column>
            <Column>
              {!planets[person.homeworld]?.name
                ? <LoadingBox>
                    <SpinnerIcon $height={40} type="wave" />
                  </LoadingBox>
                : <LinkBox onClick={() => onPlanetClick(person.homeworld)}>
                    <Text>{planets[person.homeworld].name}</Text>
                  </LinkBox>}
            </Column>
          </Row>
        ))}
      </Table>
      {!showAllItems &&
        <MoreButton onClick={() => setShowAllItems(true)}>
          <MoreIcon icon={faAngleDown} />
        </MoreButton>}
    </>
  );
}

export default React.memo(PeopleTable);

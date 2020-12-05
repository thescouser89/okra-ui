import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, textCenter } from '@patternfly/react-table';
import { SingleLineProgress } from '@app/utils/SingleLineProgress';
import styles from '@patternfly/react-styles/css/components/Table/table';

class Dashboard extends React.Component {

  render() {
    const columns = ['OKRs', 'Progress', '', 'Last Updated', '',];
    const rows = [
      ['Repository one', {title: <SingleLineProgress valueNumber={10} />}, '', '', ''],
      ['Repository two', {title: <SingleLineProgress valueNumber={99} />}, '+ 5%', 'Not updated yet', 'Update'],
      ['Repository three', {title: <SingleLineProgress valueNumber={10} />}, '+ 5%', 'Not updated yet', 'Update'],
    ];
    return (
    <PageSection>
      <Title headingLevel="h1" size="lg">Dashboard Page Title</Title>
      <Table caption="Row click handler table" cells={columns} rows={rows}>
          <TableHeader className={styles.modifiers.nowrap} />
          <TableBody />
      </Table>
    </PageSection>
    )
  }
}

export { Dashboard };

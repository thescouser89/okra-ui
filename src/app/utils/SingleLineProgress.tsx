import * as React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

interface PropsType {
    valueNumber: number
  }

export class SingleLineProgress extends React.Component<PropsType, {}> {

   render() {
        return (
            <Progress value={this.props.valueNumber} measureLocation={ProgressMeasureLocation.outside} size={ProgressSize.sm} />
        )
   } 
}
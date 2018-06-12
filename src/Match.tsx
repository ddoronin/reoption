import React from 'react';
import { some, Option } from 'monas';

export interface IMatchProps<A> {
    data: Option<A>;
    some: (a: A) => React.ReactNode;
    none?: React.ReactNode;
}

export class Match<A> extends React.Component<IMatchProps<A>> {
    constructor(props: IMatchProps<A>) {
        super(props);
    }

    render() {
        return this.props.data.fold(
            () => this.props.none,
            (a: A) => this.props.some(a)
        );
    }
};

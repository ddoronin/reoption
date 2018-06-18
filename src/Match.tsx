import React, { Component } from 'react';
import { Option, some } from 'monas';

export type Expression<A> = () => A;

export interface IMatchProps<A> {
    option: Option<A> | Expression<A>;
    some: (a: A) => React.ReactNode;
    none?: React.ReactNode;
}

export class Match<A> extends Component<IMatchProps<A>> {
    constructor(props: IMatchProps<A>) {
        super(props);
    }

    render() {
        const option: Option<A> = 
            typeof this.props.option === 'function' ? some(this.props.option()): this.props.option;
        return option.fold(
            () => this.props.none,
            (a: A) => this.props.some(a)
        );
    }
};

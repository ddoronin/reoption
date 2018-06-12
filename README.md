# reoption
Rething Options in React...

Given `this.props.userProfile: Option<UserProfile>`

Option #1 - imperative
```tsx
render() {
    return this.props.userProfile.fold(
        <div>{'N/A'}</div>,
        (userProfile: UserProfile) => <div>Hello, {userProfile.name}!</div>
    );
}
```

Option #2 - declarative
```tsx
render() {
    return (
        <Option 
            match={this.props.userProfile}
            some={(userProfile: UserProfile) => <div>Hello, {userProfile.name}!</div>}
            none={<div>{'N/A'}</div>}
        />
    );
}
```
# reoption
Rething Options in React...

Given `this.props.userProfile: Option<UserProfile>`

Option #1 - imperative
```tsx
render() {
    return this.props.userProfile.mapOrElse(
        _ => <div>{_.name}</div>,
        () => <div>{'N/A'}</div>
    );
}
```

Option #2 - declarative
```tsx
render() {
    return (
        <Option 
            data={this.props.userProfile}
            map={userProfile => <div>{userProfile.name}</div>}
            else={<div>{'N/A'}</div>}
        />
    );
}
```
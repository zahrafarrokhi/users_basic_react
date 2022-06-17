## Ubuntu Show Version Number using /etc/os-release file
```jsx
cat /etc/os-release
```


## install
* create-react-app users
* cd users
* npm i bootstrap axios


### get users

```jsx
 async componentDidMount(){
    const response = await axios.get('https://reqres.in/api/users');
    console.log(response);
    console.log(response.data);
    console.log(response.data.data);
    
  }

```

![axios](./screenshots/axios.png)

```jsx
 async componentDidMount(){
    const response = await axios.get('https://reqres.in/api/users');
    console.log(response);
    
  }
this.setState({users: response.data.data});
```

![usersdata](./screenshots/usersdata.png)

## loading

```jsx
[loading](https://www.npmjs.com/package/react-loading-skeleton)
npm i react-loading-skeleton

```

```jsx
// javascript
Array(6).fill({})
```
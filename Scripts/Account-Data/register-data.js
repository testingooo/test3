export const registerData = JSON.parse(localStorage.getItem('registersDatas')) ||
[{
  email: 'wardude@gmail.com',
  password: 'wardfude',
  firstName: 'Wari',
  lastName: 'Ganiu',
  gender: 'Male',
  address: 'Shipping address not available'
},{
  email: 'wardude5@gmail.com',
  password: 'wardude5',
  firstName: 'Waris',
  lastName: 'Gniu',
  gender: 'Male',
  address: 'Shipping address not available'
}] 

// registerData.push({
//   email: 'wardude2@gmail.com',
//   password: 'wardude',
//   firstName: 'Wais',
//   lastName: 'Gaiu',
//   gender: 'Male',
//   address: 'Shipping address not available'
// })

// registerData.push(
// saveRegisterData()

export function saveRegisterData() {
  localStorage.setItem('registersDatas', JSON.stringify(registerData))
}
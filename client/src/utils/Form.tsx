import React from 'react'
import { Link } from 'react-router-dom'

function Form() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.')
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
    }

  return (
    <div style={{
        height:"100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        gap:"1rem",
        alignItems:"center",
        backgroundColor:"#131324"    
    }}>


<form
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    backgroundColor: '#00000076',
    borderRadius: '2rem',
    padding: '5rem',
  }}
  action=""
  onSubmit={(event) => handleSubmit(event)}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      justifyContent: 'center',
    }}
    className="brand"
  >
    <img style={{ height: '5rem' }} src="../assets/eren" alt="logo" />
    <h1 style={{ color: 'white', textTransform: 'uppercase' }}>snappy</h1>
  </div>
  <input
    style={{
      backgroundColor: 'transparent',
      padding: '1rem',
      border: '0.1rem solid #4e0eff',
      borderRadius: '0.4rem',
      color: 'white',
      width: '100%',
      fontSize: '1rem',
    }}
    type="text"
    placeholder="Username"
    name="username"
    onChange={(e) => handleChange(e)}
    min="3"
  />
  <input
    style={{
      backgroundColor: 'transparent',
      padding: '1rem',
      border: '0.1rem solid #4e0eff',
      borderRadius: '0.4rem',
      color: 'white',
      width: '100%',
      fontSize: '1rem',
    }}
    type="password"
    placeholder="Password"
    name="password"
    onChange={(e) => handleChange(e)}
  />
  <button
    style={{
      backgroundColor: '#4e0eff',
      color: 'white',
      padding: '1rem 2rem',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      borderRadius: '0.4rem',
      fontSize: '1rem',
      textTransform: 'uppercase',
    }}
    type="submit"
  >
    Log In
  </button>
  <span style={{ color: 'white', textTransform: 'uppercase' }}>
    Don't have an account ?{' '}
    <Link
      style={{ color: '#4e0eff', textDecoration: 'none', fontWeight: 'bold' }}
      to="/register"
    >
      Create One.
    </Link>
  </span>
</form>

      
    </div>
  )
}

export default Form

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '0 1rem'
    }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        style={{
          marginTop: '1rem',
          color: '#0070f3',
          textDecoration: 'underline'
        }}
      >
        Go back home
      </a>
    </div>
  );
}

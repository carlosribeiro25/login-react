
import './App.css'

function App() {

  return (
    <>
    <div className="login-container">
      <div className="login-card">
        <h2>Bem-vindo</h2>
        <p>Faça login para continuar</p>
      </div>
      <form action="">
        <div className="input-group">
          <label htmlFor="email" >Email</label>
          <input type="email" className="input-field" placeholder='Seu Email'/>    
        </div>
        <br />
        <div className="input-group">
          <label htmlFor="email" >Senha</label>
          <input type="password" className="input-field" placeholder='Sua senha'/>    
        </div>
        
        <br />
      
        <button className='login-btn' type="submit">Entrar</button>
        <div className='text-center'>
        <p>Não tem uma conta?</p>
        <a className='btn-cadastro' href="#">Cadastre-se</a>
        
        </div>
       

      </form>

    </div>
    </>

  
      
  
  )
}

export default App

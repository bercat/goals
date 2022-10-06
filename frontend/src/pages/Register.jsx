import {useState, useEffect} from 'react';
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
  })  

  const { name, email, password, password2 } = formData

  const onChange = () => {

  }


  return <>
    <section className="heading">
        <h1>
            <FaUser /> Register
        </h1>
        <p>Lag en bruker</p>
    </section>

    <section className="form">
        <form>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={name} 
                    placeholder='Legg til navn' 
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={email} 
                    placeholder='Legg til e-post' 
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password" 
                    value={password} 
                    placeholder='Legg til passord' 
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="password2" 
                    className="form-control" 
                    id="password2" 
                    name="password2" 
                    value={password2} 
                    placeholder='Bekreft passord' 
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block'>Send inn</button>
            </div>
        </form>
    </section>
  </>
  
}

export default Register
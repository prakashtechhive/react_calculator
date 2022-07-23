import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import svgone from './svg/1.svg';
import svgtwo from './svg/2.svg';
import svgthree from './svg/3.svg';
import svgfour from './svg/4.svg';
import svgfive from './svg/5.svg';
import svgsix from './svg/6.svg';
import svgseven from './svg/7.svg';
import svgeight from './svg/8.svg';
import svgnine from './svg/9.svg';
import svgten from './svg/10.svg';
import svgelevan from './svg/11.svg';
import svgtwele from './svg/12.svg';
import svgsevenfive from './svg/75.svg';

function App() {
  return (
    <div className="App">
      <div className='cal-container'>
        <div className='result'>
        <input class="form-control" name="contact-phone" id="contact-phone" type="text"></input>
        </div>
        <div className='row'>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgone} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgtwo} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgthree} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgfour} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgfive} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgsix} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgseven} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgsevenfive} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color' >
             7
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             8
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             9
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
            <img src={svgeight} />

            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             4
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             5
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             6
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
            <img src={svgnine} />

            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             1
            </div>
          </div><div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             2
            </div>
          </div><div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             3
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
            <img src={svgten} />

            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color'>
              <img src={svgtwele} />
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color'>
             0
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box numbox-color number-color' >
             .
            </div>
          </div>
          <div className=' col-3'>
            <div className='numb-box btn-equal'>
              <img src={svgelevan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

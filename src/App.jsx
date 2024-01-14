import { useEffect } from 'react';
import './App.css'
import mainImage from "./assets/coffee.png"
import yesImage from "./assets/happy.png"

function App() {

  useEffect(() => {
  const wrapper = document.querySelector('.wrapper');
  const question = document.querySelector('.question');
  const yesBtn = document.querySelector('.yes-btn');
  const noBtn = document.querySelector('.no-btn');
  const mainImage = document.querySelector('.main-image');
  const alert = document.querySelector('.alert');
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Thankyou My Love ❤️ <br/> Be Ready at 5 pm 😉<br/>I Love You ❤️';
    mainImage.src = yesImage;
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    alert.style.display = 'none';
  });
  noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
  }); 
  }, [])

  return (
    <div className='wrapper'>
      <img className='main-image' src={mainImage} alt="" />
      <h1 className='question'>Would you like to go on a coffee date ?</h1>
      <h4 className='alert'>You should try <span>NO</span> 🤭</h4>
      <div className="btn-group">
        <button className="yes-btn">
          Yes
        </button>
        <button className="no-btn">
          No
        </button>
      </div>
    </div>
  )
}

export default App

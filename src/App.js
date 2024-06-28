import './App.css';
import {useState} from 'react'

function App() {
  const [name, setName] = useState('')
  const [compName, setCompName] = useState(false)
  const [nameEr, setNameEr] = useState(false)
  const [tel, setTel] = useState('')
  const [compTel, setCompTel] = useState(false)
  const [telEr, setTelEr] = useState(false)

  const blurHand = (elem) => {
    switch(elem.target.name){
      case 'name':
        setCompName(true)
        break
      case 'tel':
        setCompTel(true)
        break
    }
  }

  const checkName = (elem) => {
    setName(elem.target.value)
    const re = /^[А-Яа-яЁё]+$/
    if(!re.test(String(elem.target.value).toLocaleLowerCase())){
      setNameEr(true)
    }else{
      setNameEr(false)
    }
  }
  const checkTel = (elem) => {
    setTel(elem.target.value)
    const re = /^\d{11}$/
    if(!re.test(String(elem.target.value).toLocaleLowerCase())){
      setTelEr(true)
    }else{
      setTelEr(false)
    }
  }

  const getCurDate = () => new Date().toISOString().split()[0]

  return (
    <main className='h-dvh bg-stone-200 flex flex-col justify-center items-center text-cyan-500'>
      <h1 className='font-bold text-3xl mb-10'>ЗАПИСЬ НА МЕДИЦИНСКУЮ УСЛУГУ</h1>
      <div className='flex flex-col gap-3'>
        {compName && !name && <div className='text-res-700'>Поле обязательно для заполнения</div>}
        {nameEr && <div className='text-red-700'>Некорректное ФИО</div>}
        <label className='font-medium text-xl'>ФИО:<input onChange={elem =>checkName(elem)} onBlur={elem=>blurHand(elem)} value={name} className='rounded-xl p-1.5' type='text'></input></label>
        <label className='font-medium text-xl'>Дата рождения:<input className='rounded-xl p-1.5' type='date'></input></label>
        {compTel && !tel && <div className='text-res-700'>Поле обязательно для заполнения</div>}
        {telEr && <div className='text-red-700'>Некорректный телефон</div>}
        <label className='font-medium text-xl'>Телефон:<input onChange={elem =>checkTel(elem)} onBlur={elem=>blurHand(elem)} value={tel} className='rounded-xl p-1.5' type='text'></input></label>
        <label className='font-medium text-xl'>Дата и время желаемого приёма:<input min={getCurDate} className='rounded-xl p-1.5' type='datetime-local'></input></label>
      </div>
      <footer className='flex gap-10 items-center justify-center h-20 bg-stone-800 w-full absolute left-0 bottom-0'>
          <p>Телефон: 89110968235</p>
          <p>Адрес: ул. Руставели, д.30</p>
          <p>Все права защищены&copy;</p>
      </footer>
    </main>
    
  );
}

export default App;

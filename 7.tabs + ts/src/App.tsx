import React, { useEffect } from 'react';
import { useState } from 'react';
import './Styles/App.css';
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

interface IState {
  jobs: {
    id: number
    order: number
    title: string
    dates: string
    duties: []
    company: string

  }[]
}

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [jobs, setJobs] = useState<IState['jobs']>([])
  const [value, setValue] = useState<number>(0)

  const fetchJobs = async () => {
    try {
      const response = await fetch(url)
      const newJobs = await response.json()
      setJobs(newJobs)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return <section className='loading'>
      <h1>loading...</h1>
    </section>
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="App">
      <section className='experience-section'>
        <div className="title">
          <h1>Experience</h1>
          <div className="underline"></div>
        </div>
        <div className="jobs-container">
          <div className="btn-container">
            {
              jobs.map((item, index) => {
                return <button key={item.id} className={index === value ? 'btn active' : 'btn'} onClick={()=>setValue(index)}>{item.company}</button>
              })
            }
          </div>
          <div className="job-info">
            <article>
              <header>
                <h1 className='job-title'>{title}</h1>
                <button className='company'>{company}</button>
                <p className='date'>{dates}</p>
              </header>
              <div className="job-duties">
                {duties.map((duty, index) => {
                  return <div className='job-desc' key={index}><FaAngleDoubleRight className='job-icon' /><p>{duty}</p></div>
                })}
              </div>
            </article>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;

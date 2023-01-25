import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const SectionTwo = () => {
    const [course, setCourse] = useState([]);
    const { _id } = useParams();
  
    const getData = async () => {
      let data = await axios.get("http://localhost:8080/courses");
      setCourse(await data.data);
    };
    useEffect(() => {
      getData();
    }, []);
  
    const handleSort = () => {
      axios.get("http://localhost:8080/courses");
      const sortData = product.sort((a, b) => a.price - b.price);
      setCourse([...sortData]);
    };
  
    const misoutSort = () => {
      axios.get("http://localhost:8080/courses").then((data) => {
        let sort = data.data.sort((a, b) => Number(b.price) - Number(a.price));
        setCourse([...sort]);
      });
    };
  
    const handleDelete = async (_id) => {
     await axios.delete(`http://localhost:8080/courses/${_id}`)
    };
  
    return (
      <div id="home">
      
        <div className="home-add">
          <div>
           
          </div>
          <button onClick={() => handleSort()} className="btn-min">min to max</button>
          <button onClick={() => misoutSort()} className="btn-max">max to min</button>
        </div>
  
        <div className="map-course">
          <input />
          {course.map((element) => {
            return (
              <div className="all">
                <Link to={`/home-page/${element._id}`}>
                  <div className="card">
                    <div className="card-img">
                      <img src={element.imgurl} alt="" />
                    </div>
                    <div className="cardtext">
                      <h4>{element.model}</h4>
                      <h3>{element.name}</h3>
                      <h2>{element.price}$</h2>
                    </div>
                    <div className="delete-btn">
                      <button onClick={() => handleDelete()}>Delete</button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

        </div>
      </div>
  
)}

export default SectionTwo
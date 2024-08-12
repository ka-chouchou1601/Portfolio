import React from 'react'
import styled from 'styled-components'
import'../App.css'
import AmazonPrime from "../img/AmazonPrime.PNG";
import DataPros from "../img/DataPros.PNG";
import movie_correlation from "../img/movie_correlation.jpg";
import Online_shopping from "../img/Online_shopping.jpg";
import Chousnellor from '../img/Chousnellor.png'
import Bitcoin_crypto from "../img/Bitcoin_crypto.jpg";
import Airbnb from "../img/Airbnb.PNG";
import covid19_cases from "../img/covid19_cases.jpeg";
import Nashville_House_1 from "../img/Nashville_House_1.jpg";
import Gechou from '../img/Gechou.png'
import weshare from '../img/weshare.png'
import { Swiper,SwiperSlide } from 'swiper/react'
import GoTo from '../img/GoTo.png'
import 'swiper/css';
import {themeContext} from '../Context'
import { useContext } from'react'

const Project = () => {
   const theme =  useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <div className="Projects" id="Project">
        {/* heading */}
        <span
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          Recent Projets
        </span>
        <span>Portolio</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          className={"Projects-slider"}
          breakpoints={{
            920: {
              slidesPerView: 3,
              spaceBetween: 30,
              grabCursor: true,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 10,
              grabCursor: true,
            },
          }}
        >
          <SwiperSlide className="card">
            <img
              src={Nashville_House_1}
              className="card_image"
              alt=""
              height="190px"
            />
            <div className="card_desc">
              <span>Data CLeaning in SQL</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                In this project, I used SQL to clean and standardize a Nashville
                housing dataset, focusing on date formatting, address parsing,
                and duplicate removal.
              </p>
              <a
                href="https://github.com/ka-chouchou1601/Data_Analytic_-Portfolio_Projects/blob/main/NashvilleHousingDC.sql"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>

          {/* .... */}

          <SwiperSlide className="card">
            <img
              src={covid19_cases}
              className="card_image"
              alt=""
              height="175px"
            />
            <div className="card_desc">
              <span>Covid 19 Data Exploration </span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                In this project, I used SQL to analyze global COVID-19 data,
                examining infection rates, mortality rates, and vaccination
                progress. I calculated key metrics and created views and tables
                for advanced analysis.
              </p>
              <a
                href="https://github.com/ka-chouchou1601/Data_Analytic_-Portfolio_Projects/blob/main/CovidProject.sql"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>

          {/* .... */}
          <SwiperSlide className="card">
            <img src={Airbnb} className="card_image" alt="" height="190px" />
            <div className="card_desc">
              <span>Airbnb Projects in Tableau</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                In this project, I analyzed Airbnb data with Tableau, focusing
                on pricing and revenue metrics. I then created interactive
                visualizations to showcase detailed insights.
              </p>
              <a
                href="https://public.tableau.com/app/profile/chouella.kanyonga/vizzes"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>
          {/* .... */}
          <SwiperSlide className="card">
            <img
              src={Bitcoin_crypto}
              className="card_image"
              alt=""
              height="190px"
            />
            <div className="card_desc">
              <span className="crypto">Automating Crypto website API</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                In this project, using python we automated the API data
                retrieval process and refined the dataset. I then created
                visualizations to effectively present the insights.
              </p>
              <a
                href="https://github.com/ka-chouchou1601/Data_Analytic_-Portfolio_Projects/blob/main/Automating%20crypto%20website%20API.ipynb"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>

          {/* .... */}
          <SwiperSlide className="card">
            <img
              src={movie_correlation}
              className="card_image"
              alt=""
              height="205px"
            />
            <div className="card_desc">
              <span className="crypto">Movie Correlation with python</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                In this project, I analyzed the factors that affect the gross
                revenue of movies using python.
              </p>
              <a
                href="https://github.com/ka-chouchou1601/Data_Analytic_-Portfolio_Projects/blob/main/Movie_Correlation_in_python_project.ipynb"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>
          {/* .... */}
          <SwiperSlide className="card">
            <img
              src={Online_shopping}
              className="card_image"
              alt=""
              height="190px"
            />
            <div className="card_desc">
              <span className="crypto">Drivers of Higher Online Purchases</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                In this project, I used Python to analyze online shopping
                factors that explain why some products are bought significantly
                more than others. I identified key criteria driving higher
                purchases.
              </p>
              <a
                href="https://github.com/ka-chouchou1601/Data_Analytic_-Portfolio_Projects/blob/main/Online_shopping_dataset_python_projet.ipynb"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>

          {/* .... */}
          <SwiperSlide className="card">
            <img src={DataPros} className="card_image" alt="" height="190px" />
            <div className="card_desc">
              <span className="crypto">Analyzing Data Pros in Power BI</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                In this project, I analyzed data professionals using Power BI,
                uncovering key trends in their salaries, job satisfaction, and
                demographics.
              </p>
              <a
                href="https://github.com/ka-chouchou1601/Data_Analytic_-Portfolio_Projects/blob/main/Power%20BI%20_Project_Data%20Professional%20survey%20Breakdown.pbix"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            <img
              src={AmazonPrime}
              className="card_image"
              alt=""
              height="190px"
            />
            <div className="card_desc">
              <span className="crypto">Amazon Prime Analysis in Power BI</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                In this project, I created a Power BI report analyzing Amazon
                Prime Movies and TV Shows, offering insights into content
                trends, ratings, and genre popularity.
              </p>
              <a
                href="https://github.com/ka-chouchou1601/Data_Analytic_-Portfolio_Projects/blob/main/Amazon%20Prime.pbix"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>
          {/* ... */}
          <SwiperSlide className="card">
            <img src={Chousnellor} className="card_image" alt="" />
            <div className="card_desc">
              <span>Chousnellor</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntu
              </p>
              <a
                href="http://chousnellor.herokuapp.com/"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            <img src={Gechou} className="card_image" alt="" />
            <div className="card_desc">
              <span>Gechou</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </p>
              <a href="" style={{ textDecoration: "none" }}>
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={weshare} alt="" />
            <div className="card_desc">
              <span>WeShare</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur
              </p>

              <a
                href="https://quiet-shape-6288.on.fleek.co/"
                style={{ textDecoration: "none" }}
              >
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>
          {/* .... */}
          <SwiperSlide className="card">
            <img src={Gechou} alt="" />
            <div className="card_desc">
              <span>Gechou</span>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi consequuntur
              </p>
              <a href="" style={{ textDecoration: "none" }}>
                <button className="button p-button">
                  <img src={GoTo} />
                  Go To
                </button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
const Container=styled.div`
.Projects{
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;


}
.Projects span:nth-of-type(1){
  color: black;
  font-size:2rem;
  font-weight:bold;
}
.Projects span:nth-of-type(2){
  color:#dc4848;
  font-size: 2.5rem;
  font-weight:bold;
}
.card {
  width:250px;
   background: rgba(255, 255, 255, 0.66);
    border-radius: 20px;
    padding: 0px 0px 1rem 0px;
gap:30px;

p{
  color: gray;
    font-size: 14px;
}
}
.card:hover{
  transform:scale(1.2);
  transition:300ms ease-in;

}

.card span:nth-of-type(1){
color: black;
  font-size:25px;
  font-weight:bold;
}
.card_desc{
margin:50px 
display:flex;
flex-direction:column;
img{
  width:10px;
}
}


.Projects .swiper{
  overflow :visible !important;
}
.Projects-slider{
  margin-top:3rem;
  width:100%;

}
.Projects-slider .swiper-slider{
  width:20rem;
}

.Projects img{
  width:20rem;
      border-radius: 10px;
}
.p-button {
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-item:center;
    box-shadow: 0px 19px 60px rgba(0, 0, 0, 0.08);
    border-radius: 7px;
    border: none;
    padding-left:17px;
   padding-right:17px;
   padding-top:10px;
   padding-bottom:10px;
    font-size: 15px;
position:relative;
left:270px;
gap:10px;


img{
  width:20px;
}

}
 


.p-button:hover {
    transform: scale(1.1);
    cursor: pointer;
     border: 1px solid #dc4848;

}


 @media screen and (min-width:550px)and(max-width:830px){
  .card_image{
   
      width:1 rem;


  
 }
 .p-button{
  margin-left: 500px;
  
 }
`
export default Project
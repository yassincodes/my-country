import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

function ImageSlider() {
  const images = [
    {
      id: 0,
      img: <img src="https://files.fm/thumb.php?i=785t8nee3" />,
    },
    {
      id: 1,
      img: <img src="https://files.fm/thumb.php?i=94c22p9gv" />,
    },
    {
      id: 2,
      img: <img src="https://files.fm/thumb.php?i=d2pjep74a" />,
    },
    {
      id: 3,
      img: <img src="https://files.fm/thumb.php?i=295pqy9zn" />,
    },
    {
      id: 4,
      img: <img src="https://files.fm/thumb.php?i=hv2gvqjmp" />,
    },
    {
      id: 5,
      img: <img src="https://files.fm/thumb.php?i=kb69drdbc" />,
    },
    {
      id: 6,
      img: <img src="https://files.fm/thumb.php?i=zz79md2by" />,
    },
    {
      id: 7,
      img: <img src="https://files.fm/thumb.php?i=3g9fn27ce" />,
    },
    {
      id: 8,
      img: <img src="https://files.fm/thumb.php?i=bqd298gp8" />,
    },
    {
      id: 9,
      img: <img src="https://files.fm/thumb.php?i=p3wjbnyae" />,
    },
    {
      id: 10,
      img: <img src="https://files.fm/thumb.php?i=ubapehw42" />,
    },
    {
      id: 11,
      img: <img src="https://files.fm/thumb.php?i=phyccn37p" />,
    },
    {
      id: 12,
      img: <img src="https://files.fm/thumb.php?i=46kefepbq" />,
    },
  ];

  const threeGrid1 = images.slice(0, 4); // first 4 images
  const threeGrid2 = images.slice(4, 8); // second 4 images
  const threeGrid3 = images.slice(8, 12); // last 4 images

  const twoGrid1 = images.slice(0, 6); // first 6 images
  const twoGrid2 = images.slice(6, 12); // last 6 images

  const oneGrid = images.slice(0, 12);
  //
  return (
    <div className="grids_container">
      <div className="three_grids_container">
        <div className="images">
          {threeGrid1.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
        <div className="images">
          {threeGrid2.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
        <div className="images">
          {threeGrid3.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
      </div>

      <div className="two_grids_container">
        <div className="images">
          {twoGrid1.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
        <div className="images">
          {twoGrid2.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
      </div>

      <div className="one_grid_container">
        <div className="images">
          {oneGrid.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;

import React from "react";
import styles from "./Info.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { InfoState } from "../../types";
import { setCurrentMovieInfo } from "../../redux/slices/movieInfoSlice";

function Info({ type }: { type: string }) {
  const movieInfos = useSelector((state: any) => state.movieInfo.allInfos);
  const tentInfos = useSelector((state: any) => state.tentInfo.allInfos);
  const dispatch = useDispatch();

  if (type === "movie") {
    return (
      <div className={styles["info"]}>
        <div className={styles["info-nav"]}>
          <ul>
            {movieInfos.map((info, i) => (
              <li
                key={`info${i}`}
                className={`${styles["info-nav-item"]} ${
                  info.on ? styles["on"] : styles["off"]
                }`}
                onClick={() => dispatch(setCurrentMovieInfo({ infoNum: i }))}
              >
                {info.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["info-item"]}>
          {movieInfos[0].on && (
            <img
              src="/images/movie-weather.png"
              alt=""
              width="500"
              height="500"
            />
          )}
          {movieInfos[1].on && <div>image1</div>}
          {movieInfos[2].on && <div>image2</div>}
          {movieInfos[3].on && <div>image3</div>}
          {movieInfos[4].on && <div>image4</div>}
          {movieInfos[5].on && <div>image5</div>}
        </div>
      </div>
    );
  } else {
    return <div>Info tent</div>;
  }
}

export default Info;

import { useEffect, useState } from "react";
import "./index.css";
import Axios from 'axios'
export default function Home() {
  const [currentDrawNumber, setCurrentDrawNumber] = useState(0);
  const [prevLottoData, setPrevLottoData] = useState({});
  function getCurrentLottoDrawNumber() {
    // 첫 회차 날짜: 2002년 12월 7일
    const firstDrawDate = new Date(2002, 11, 7); // 월은 0부터 시작하므로 12월은 11로 설정
    const currentDate = new Date();

    // 첫 회차부터 현재까지의 일 수 계산
    const diffInTime = currentDate - firstDrawDate;
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    // 주 수 계산
    const weeksSinceFirstDraw = Math.floor(diffInDays / 7);

    // 이번 주 회차 번호
    
    // getLottoNumber(weeksSinceFirstDraw + 1)
  }

  function getLottoNumber(drawNo) {
    setCurrentDrawNumber(drawNo);
    const params = {
      method:'getLottoNumber',
      drawNo,
    }
    Axios.get('https://www.dhlottery.co.kr/common.do?' + new URLSearchParams(params).toString()).then((data) => {
      setPrevLottoData(data);
    })
  }

  useEffect(() => {
    getCurrentLottoDrawNumber();
  }, []);

  return (
    <>
      <div className="main">지난 회차 {currentDrawNumber}</div>
    </>
  );
}

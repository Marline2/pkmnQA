import React from "react";
import styled from "styled-components";
import img from "./Quiz.jpg";

const SwipeItem = React.memo(({ onSwipe }) => {
  const swipe_div = React.useRef(null);
  let swipe_status = "ready";
  let target_classname = "";
  let coordinate = {
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
  };

  React.useEffect(() => {
    const reset = () => {
      //   console.log("in reset");
      swipe_status = "ready";

      coordinate = {
        start_x: 0,
        start_y: 0,
        end_x: 0,
        end_y: 0,
      };

      swipe_div.current.className = target_classname;

      swipe_div.current.style.left = 0 + "px";
      swipe_div.current.style.top = 0 + "px";
    };

    const touchStart = (e) => {
      //   console.log("start");

      // 터치 시작 시, swipe_status를 touchstart로 변경한다.
      // 그리고 터치 시작한 좌표를 기록
      swipe_status = "touchstart";
      target_classname = swipe_div.current.className;

      coordinate = {
        ...coordinate,
        start_x: e.touches[0].clientX,
        start_y: e.touches[0].clientY,
      };
    };

    const touchEnd = (e) => {
      swipe_status = "touchend";

      coordinate = {
        ...coordinate,
        end_x: e.changedTouches[0].clientX,
        end_y: e.changedTouches[0].clientY,
      };

      //   x좌표 이동 거리를 구하기
      let diff_x = coordinate.end_x - coordinate.start_x;
      //   스와이프 방향 / 기본은 left
      let direct = "left";

      if (Math.abs(diff_x) > 50) {
        swipe_div.current.className = target_classname + " swipe";

        // 움직인 방향에 따라 더 옴직이고 투명도를 0으로 (점점 사라지게)
        if (diff_x > 0) {
          direct = "right";
          swipe_div.current.style.left = diff_x + 150 + "px";
          swipe_div.current.style.opacity = 0;
        } else {
          direct = "left";

          swipe_div.current.style.left = diff_x - 150 + "px";
          swipe_div.current.style.opacity = 0;
        }

        // 300 ms후 reset

        window.setTimeout(() => {
          reset();
          onSwipe(direct);
        }, 300);
        return;
      }
      reset();
    };

    const touchMove = (e) => {
      // 스와이프 중 다른 이벤트가 발생하는 것을 막기
      e.preventDefault();

      // 현재 좌표(이동 중인 좌표)를 기록
      let current_coordinate = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };

      //   터치 중일 때 div가 따라 움직이도록
      swipe_div.current.style.left =
        current_coordinate.x - coordinate.start_x + "px";
      swipe_div.current.style.top =
        current_coordinate.y - coordinate.start_y + "px";
    };

    // 터치 이벤트가 취소될 경우 원래 상태로
    const touchCancel = (e) => {
      swipe_status = "cancel";
      reset();
    };

    swipe_div.current.addEventListener("touchstart", touchStart);
    swipe_div.current.addEventListener("touchend", touchEnd);
    swipe_div.current.addEventListener("touchmove", touchMove);
    swipe_div.current.addEventListener("touchcancel", touchCancel);

    // 이부분은 이벤트 해제
    return () => {
      if (!swipe_div.current) {
        return;
      }
      swipe_div.current.removeEventListener("touchstart", touchStart);
      swipe_div.current.removeEventListener("touchend", touchEnd);
      swipe_div.current.removeEventListener("touchmove", touchMove);
      swipe_div.current.removeEventListener("touchcancel", touchCancel);
    };
  }, []);

  return (
    <DragItem ref={swipe_div}>
      <img src={img} />
    </DragItem>
  );
});

SwipeItem.defultProps = {
  onSwipe: () => {},
};
/*props가 없으면 에러가 뜨는데 그걸 방지해주는 것. 나는 프록스가 있다. */
const DragItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fiexd;
  max-height: 100vh;
  max-width: 100vw;
  &.swipe {
    transition: 300ms;
  }
  & > img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
    margin-top: -400px;
  }
`;
export default SwipeItem;

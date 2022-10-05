import React from 'react'
import styled from 'styled-components'

const DayAndNight = () => {
  return (
    <Container>
        <input id="toggle" type="checkbox" />
        <label htmlFor="toggle">
          <button>
            <i />
          </button>
        </label>
    </Container>
  )
}

export default DayAndNight

const Container = styled.div`
  display: flex;
  justify-content: center;

  input[type='checkbox'] {
    width: 0;
    visibility: hidden;
    pointer-events: none;
    + label {
      transition: all 1s linear;
      width: 11vmin;
      height: 5vmin;
      box-shadow: 0 0 1px 1px #00000066;
      border-radius: 4vmin;
      background: #74b1f7;
      display: flex;
      justify-content: center;
      position: relative;
      cursor: pointer;

      &:after {
        content: '';
        width: 3vmin;
        height: .5vmin;
        position: absolute;
        background: #fff;
        border-radius: 1vmin;
        top: 3vmin;
        left: 5vmin;
        z-index: 2;
      }

      &:before {
        content: '';
        width: 4vmin;
        height: .5vmin;
        position: absolute;
        background: #fff;
        border-radius: 1vmin;
        top: 2vmin;
        left: 3vmin;
        z-index: 2;
      }

      button {
        &:before {
          content: '';
          width: 4vmin;
          height: .5vmin;
          position: absolute;
          background: #fff;
          border-radius: 1vmin;
          top: 1.1vmin;
          right: -4vmin;
          z-index: 2;
        }

        transition: all .2s linear;
        width: 5vmin;
        height: 5vmin;
        background: #f6ae1f;
        box-shadow: 0 0 1px 1px #00000066;
        border-radius: 100%;
        transform: translateX(-55%);
        border: none; 
        pointer-events: none;
      }
    }

    &:checked{
      width: 10px;
      + label {
        transition: all 1s linear;
        background: #0c51a0;

        &:after {
          content: '\u204E';
          width: .5vmin;
          height: .5vmin;
          color: #fff;
          background: none;
          border-radius: 0;
          top: 1vmin;
          left: 4.5vmin;
          z-index: 2;
        }

        &:before {
          content: '\u204E';
          width: 1vmin;
          height: 1vmin;
          position: absolute;
          color: #fff;
          border-radius: 0;
          background: none;
          top: 0vmin;
          left: 2.5vmin;
          z-index: 2;
        }

        button {
          background: #e6e5e8;
          box-shadow: 0 0 1px 1px #00000066;
          transform: translateX(55%);
          position: relative;

          &:before {
            content: '';
            width: 1vmin;
            height: 1vmin;
            position: absolute;
            background: #8a898b;
            border-radius: 50%;
            top: 1.1vmin;
            right: 50%;
            z-index: 2;
          }

          &:after {
            content: '';
            width: .8vmin;
            height: .8vmin;
            position: absolute;
            background: #8a898b;
            border-radius: 100%;
            top: 3vmin;
            right: 35%;
            z-index: 2;
          }
          
          i {
            &:after {
              content: '';
              width: .6vmin;
              height: .6vmin;
              position: absolute;
              background: #8a898b;
              border-radius: 50%;
              top: 1.45vmin;
              right: 25%;
              z-index: 2;
            }

            &:before {
              content: '\u204E';
              width: .3vmin;
              height: .3vmin;
              position: absolute;
              color: #fff;
              top: 2vmin;
              left: -50%;
              z-index: 2;
            }
          }
        }
      }
    }    
  }

`
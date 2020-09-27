import React from 'react';
import { connect } from 'react-redux';
import { toggleFeelingActivity } from '../../redux/user-interface/user-interface.actions';

import './feeling-activity.styles.scss';

import PopUp from '../pop-up/pop-up.component';
import Emoji from '../emoji/emoji.component';
import Scroll from '../scroll/scroll.component';

import CloseIcon from '@material-ui/icons/Close';

const FeelingActivity = ({
  toggleFeelingActivity,
  handleIsFeeling,
  isFeeling,
  currentUser,
}) => {
  const { name, surname } = currentUser;

  const emojiDataBase = [
    { id: 1, symbol: '🙂', label: 'happy' },
    { id: 2, symbol: '😇', label: 'blessed' },
    { id: 3, symbol: '😍', label: 'in love' },
    { id: 4, symbol: '🙁', label: 'sad' },
    { id: 5, symbol: '🤩', label: 'excited' },
    { id: 6, symbol: '🤪', label: 'crazy' },
    { id: 7, symbol: '😁', label: 'fantastic' },
    { id: 8, symbol: '😎', label: 'cool' },
    { id: 9, symbol: '😌', label: 'grateful' },
    { id: 10, symbol: '😀', label: 'thankful' },
    { id: 11, symbol: '😴', label: 'tired' },
    { id: 12, symbol: '🥶', label: 'cold' },
    { id: 13, symbol: '😠', label: 'angry' },
    { id: 14, symbol: '🥴', label: 'drunk' },
  ];
  return (
    <PopUp>
      <div className='feeling-activity'>
        <div className='feeling-activity__header'>
          <h2>How are you feeling?</h2>
          <button
            onClick={() => {
              toggleFeelingActivity();
              console.log(isFeeling);
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <div className='felling-activity__is-feeling'>
          <h4>
            {`${name} ${surname} is feeling ${
              isFeeling.feeling ? isFeeling.feeling : '...'
            }`}
            <span
              role='img'
              aria-label={isFeeling.feeling}
              style={{ marginLeft: '2px' }}
            >
              {isFeeling.emoji}
            </span>
          </h4>
        </div>
        <div className='feeling-activity__list'>
          <Scroll height='260px'>
            {emojiDataBase.map((emoji) => (
              <div
                key={emoji.id}
                className='feeling-activity__option'
                onClick={() => {
                  handleIsFeeling(emoji.symbol, emoji.label);
                  toggleFeelingActivity();
                }}
              >
                <Emoji
                  className='feeling-activity__emoji'
                  symbol={emoji.symbol}
                  label={emoji.label}
                />
                <p>{emoji.label}</p>
              </div>
            ))}
          </Scroll>
        </div>
      </div>
    </PopUp>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFeelingActivity: () => dispatch(toggleFeelingActivity()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeelingActivity);

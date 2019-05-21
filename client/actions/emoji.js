import { getEmoji } from "../api/emoji";

export const SAVE_EMOJI = "SAVE_EMOJI";

export function saveEmojiAction(emoji) {
  return {
    type: SAVE_EMOJI,
    emoji
  };
}

export function fetchEmojiAction() {
  return dispatch => {
    getEmoji().then(emoji => {
      dispatch(saveEmojiAction(emoji));
    });
  };
}

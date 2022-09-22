/*
Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.

*/

function likeOrDislike(buttons) {
    if (buttons.length == 0){
      return 'Nothing';
    } else {
      let result = '';
      buttons.forEach((e)=>{
        if (result !== e){
          result = e;
        } else {
          result = 'Nothing';
        }
      });
      return result
    }
}
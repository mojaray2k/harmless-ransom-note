function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  /**
   * for both foreach loops the Linear Time Complexity is either
   * O(n + m)
   * or 
   * O(n)
   */

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

// harmlessRansomNote('', 'This is all the magazine text in the magazine');
 harmlessRansomNote('this is a secret note for you from a secret admirer','puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a trip i have for you is to go early in the morning where it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');



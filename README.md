##	EDURate - Youtube
##	Making Youtube More Educational Through Chrome Extensions and Youtube Feed Injections

**EDUrate** is a **lightweight chrome browser extension** that interfaces directly with your Youtube.com content feed in order to inject accurate ratings (0%-100%) on the educational value of the content you are being shown. Inspiration for this project came from our love for the immmense learning potential of YouTube, but great distaste for the constant distractions that suggested  uneducational videos are from the learning workflow. 

EDUrate calls upon a custom library of over **8,000 highly-educational words**, words that are used to analyze a video's **potential for learning.** EDUrate also scrapes through a video's linked directory to find and evaluate the content-category (i.e. Educational, Entertainment, Sports) and build a rating from there... Future adaptations of EDUrate will use machine learning algorithms (TensorFlow) to discover the nuances of video titles which indicate their intellectual value to a user.

Potential Applications: 
  - Deployed by _School Administrators,_ along with simple Javascript interpretations that block content which does not reach a       certain educational percentage: Keeping students undistracted, and freeing them to learn.
  - Deployed by _org/office management_ in order to encourage productive unencumbered YouTube learning.
  - Deployed by independent creators, builders, and learners to limit personal distraction and encourage thorough learning.
  
Technologies Used:
   - EDUrate was deployed with **Javascript** to run in the background on top of the **Google Chrome browser.** 
   - EDUrate's backend and rating algorithms were made by generating keyword sets using a public thesauras API and Python 3.6 code. 
   - Future adaptations of the rating algorithm will use machine learning / TensorFlow concepts and a Flask API server. This way, the rating algorithm could be improved across a large spectrum of users, developing better understanding of titles with more use and public interest.

EDUrate solves a small portion of the huge problem of _ media distraction _ in our modern, online age. It is a valuable stride to **further education-first values and productivity online.**

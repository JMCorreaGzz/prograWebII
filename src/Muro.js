

/*function makeText() { 
    const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo vero hic, perspiciatis unde minus error consectetur, quos sunt officiis ad repellendus pariatur eligendi tempora praesentium tenetur';
    const loremArray = lorem.split(' ');
    const amountOfText = Math.floor(Math.random() * (30 - 10) + 10);
    const text = loremArray.slice(0, amountOfText);
    return text.join(' ') + '.';
    }
    
function randomRotate() {
    const deg = Math.random() * (5 - -5) + -5;
    return 'rotate(' + deg + 'deg)';
    }

function PostIt(){
    for (let i = 1; i < 20; i++){
        .card(style={
          transform: randomRotate(),
        })
          img(src=`https://picsum.photos/id/${i + 19 * i}/600/300`)
          <h2> Card Title </h2>
          <p></p> #{makeText()}
      }
}*/
    
    

/*export default function Muro(){
    return(
        <>
       
        </>
    );
}*/

export default function Muro()
{
return ( 
<>
<div class="container">
  <div class="card-columns">

    <div class="card text-white border-0">

      <div class="card-img-overlay --card-img-overlay-purple d-flex flex-column justify-content-between align-items-start p-5">
        <div class="h2 mb-2"><a class="text-white text-decoration-none" href="javascript://">Web Design Trends</a></div>
        <span class="badge badge-warning2 text-uppercase">January 2023</span>
      </div>
    </div>

    <div class="card border-0">
      <div class="position-relative text-white">

        <div class="card-img-overlay three"><span class="badge badge-light text-uppercase">Famous</span></div>

        <div class="--card-smooth-caption">
          <div class="d-flex justify-content-between align-items-center">
            <div class="mr-auto">
              <h5 class="card-title text-white">Smooth caption</h5>
              <h6 class="card-subtitle text-white">Alternative caption</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body">
        <p class="card-text"> Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna irure ex officia ea sunt in incididunt.</p>
      </div>

      <div class="card-footer">
        <div class="media align-items-center">
          <div class="media-body"><a class="card-link text-primary read-more" href="javascript://">Read More</a></div>
          <div class="footerright">
            <div class="tnlink3"><i class="fas fa-heart" aria-hidden="true"></i></div>
            <div class="tnlink3"><i class="fas fa-share-nodes" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>

    </div>

    <div class="card text-white border-0">

      <div class="card-img-overlay --card-img-overlay-purple d-flex flex-column justify-content-between align-items-start p-5 four"></div>

      <div class="card-img-overlay card-overlay-black hover-light d-flex flex-column justify-content-between align-items-start">
        <div class="d-flex justify-content-between w-100 mb-3">
          <div><span class="badge badge-warning3 mr-2"> TRENDS</span><span class="badge badge-info"> DESIGN</span></div>

          <a href="javascript://">
            <div class="myicoo"></div>
          </a>
        </div>
        <div class="mb-4">

          <div class="h3"><a class="text-white text-decoration-none" href="javascript://">Web Design templates<br></br>Selection</a></div>
        </div>
        <div class="text-light">January 14 2023</div>
      </div>
    </div>

    <div class="card text-center border-0">
      <div class="card-body">
        <div class="card-card-avatar mb-4">
          <div class="card-avatar avatar-border two">
          </div>
        </div>
        <div class="mb-5">
          <h5 class="card-title mb-1">Hannah Luebbering</h5>
          <div class="text-muted">Applied Mathematics</div>
        </div>
        <div class="d-flex justify-content-around align-items-center"><a class="card-link text-uppercase" href="javascript://">Accept</a><a class="card-link text-uppercase text-dark" href="javascript://">Denied</a></div>
      </div>
    </div>

    <div class="card bg-primary text-white text-center p-4 border-0 two">
      <blockquote class="blockquote mb-0">
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
        <footer class="blockquote-footer text-white"><small>Someone famous in
            <cite title="Source Title"> Source Title</cite></small></footer>
      </blockquote>
    </div>

    <div class="card text-center border-0 mb-4">
      <div class="--card-cup bg-primary"></div>
      <div class="card-body proavatar">
        <div class="card-avatar avatar-border mt-n5">
          <rect width="100%" height="100%" fill="#495057"></rect>
        </div>
        <h5 class="card-title text-primary mb-1">Hannah Luebbering</h5>
        <div class="text-muted">Data Science</div>

        
      </div>
      <div class="card-footer --card-footer two">
        <a class="card-link text-primary read-more two" href="javascript://">Follow</a>

      </div>

    </div>

    <div class="card bg-primary text-white text-center p-4 border-0">
      <blockquote class="blockquote mb-0">
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
        <footer class="blockquote-footer text-white"><small>Someone famous in
            <cite title="Source Title"> Source Title</cite></small></footer>
      </blockquote>
    </div>

    <div class="card bg-secondary two text-white p-4 border-0">

      <div class="container incard">
        <h2 class="indent">Inset Heading</h2>
        <p class="indent"> Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna. </p>
      </div>

    </div>

    <div class="card border-0 three">
      <div class="position-relative">

        <div class="card-img-overlay two"><span class="badge badge-light text-uppercase">FASHION</span></div>
      </div>
      <div class="card-body two">

        <h5 class="card-title">Fashion today</h5>
        <h6 class="card-subtitle mb-2 text-muted">January 16 2023</h6>
        <hr></hr>
        <p class="card-text mt-4">Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna irure ex officia ea sunt in incididunt.</p>
      </div>
      <div class="card-footer">

        <div class="media align-items-center">

          <div class="media-body"><a class="card-link text-primary read-more" href="javascript://">Read More</a></div>

          <div class="footerright">
            <div class="tnlink3"><i class="fas fa-heart"></i></div>
            <div class="tnlink3"><i class="fas fa-share-nodes"></i></div>
          </div>

        </div>
      </div>
    </div>

    <div class="card bg-secondary two text-white p-4 border-0">

      <hr></hr>

      <div class="container incard">
        <h2 class="indent red">Inset Heading</h2>
        <p class="indent"> Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna. </p>
      </div>

    </div>

    <div class="card text-white border-0">

      <div class="card-img-overlay --card-img-overlay-purple d-flex flex-column justify-content-between align-items-start p-5 three"></div>

      <div class="card-img-overlay card-overlay-black hover-light d-flex flex-column justify-content-between align-items-start">
        <div class="d-flex justify-content-between w-100 mb-3">
          <div><span class="badge badge-lightblue mr-2"> TRENDS</span><span class="badge badge-warning"> DESIGN</span></div>

          <a href="javascript://">
            <div class="myicoo"></div>
          </a>
        </div>
        <div class="mb-4">

          <div class="h3"><a class="text-white text-decoration-none" href="javascript://">Web Design templates<br />Selection</a></div>
        </div>
        <div class="text-light">January 16 2023</div>
      </div>
    </div>

    <div class="card border-0 wtab">

      <div class="card-body three"><small class="text-muted">This is my tag</small>
        <h5>Lorem ipsum dolor sit amet consectetur adipisi</h5>

        <div class="footer">
          <div class="d-flex justify-content-between w-100">
            <div>
              <a class="dateit"><i class="fa fa-calendar pr-1"></i> Jan 2023</a>

              <a class="locit"><i class="fa fa-twitter pr-1"></i> Australia</a>
            </div>
            <a>
              <i class="fa fa-twitter pr-1"> </i>
            </a>
          </div>
        </div>
      </div>

    </div>


    <div class="card border-0">
      <div class="position-relative">

      </div>
      <div class="card-body">
        <div class="mb-3"><a class="card-link text-primary read-more" href="javascript://">Read More</a></div>
        <h5 class="card-title">Card title</h5>
        <hr></hr>
        <p class="card-text">Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proiden.</p>
      </div>
      <div class="card-footer">
        <div class="media align-items-center">
          <div class="media-body"><a class="card-link text-uppercase" href="javascript://">Read More</a></div>
          <div class="footerright">
            <div class="tnlink3"><i class="fas fa-heart" aria-hidden="true"></i></div>
            <div class="tnlink3"><i class="fas fa-share-nodes" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-primary text-white text-center p-4 border-0 four">

    </div>

  </div>
</div>
<footer class="footer">
  <p>Created by <a class="yo" href="https://codepen.io/hluebbering">Hannah Luebbering</a> | 2023 </p>
  <div class="footer-social">

    <a class="footer-social-link" href="https://codepen.io/hluebbering" target="__blank">
      <i class="fa fa-codepen"></i>
    </a>
    <a class="footer-social-link" href="https://hluebbering.github.io/" target="__blank">
      <i class="fa fa-link"></i>
    </a>
    <a class="footer-social-link" href="https://github.com/hluebbering" target="__blank">
      <i class="fa fa-github"></i>
    </a>
    <a class="footer-social-link" href="https://www.linkedin.com/in/hannah-luebbering-99609818a/" target="__blank">
      <i class="fa fa-linkedin"></i>
    </a>
    <a class="footer-social-link" href="https://open.spotify.com/user/hannahluebbering" target="__blank">
      <i class="fa fa-spotify"></i>
    </a>
  </div>
</footer>
</>
)
}



    
import React from "react";
import "./Team.css";

function Team() {
  return (
    <div>
      <h1 class="teamheading">Our Team</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="https://images.all-free-download.com/images/graphicthumb/woman_avatar_icon_classical_cartoon_character_sketch_6838972.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Nitika </h5>
                <h6 class="card-subtitle mb-2 text-muted">Director</h6>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="https://images.all-free-download.com/images/graphicthumb/manager_conceptual_background_man_avatar_business_icons_decor_6837131.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Jatin</h5>
                <h6 class="card-subtitle mb-2 text-muted">Promoter</h6>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="https://images.all-free-download.com/images/graphicthumb/man_avatar_icon_classical_cartoon_character_sketch_6838974.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">RS Verma</h5>
                <h6 class="card-subtitle mb-2 text-muted">Promoter</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

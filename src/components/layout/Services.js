import React from "react";
import { Link, Redirect } from "react-router-dom";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { FaMixcloud } from "react-icons/fa";
import { SiDeezer } from "react-icons/si";

const Services = () => {
  return (
    <React.Fragment>
      <div class="hero-image">
        <div class="hero-container" id="text">
          <h1>
            <span>Services</span>
          </h1>
        </div>
      </div>
      <div class="main">
        <div class="service-container">
          <div class="row pt-pb-160">
            <p class="text-white medium-text">
              Zilah Music Publishing is a licensing & publishing company. We
              represent the works of composers, music producers, indie bands,
              singers and rappers. Zilah Music Publishing works with music
              libraries for TV, ad agencies, video games, film & television. We
              also represent a growing roster of celebrity talent.
            </p>
            <br />
            <br />
            <p class="text-white medium-text">
              {" "}
              Our company provides licensing, royalty collection, clearances,
              administration publishing rights management,and music rights
              royalty payment. We got you covered on every level to get the job
              done.{" "}
            </p>

            <p class="text-white medium-text pt-90">
              {" "}
              follow us on{" "}
              <span>
                <a href={"https://twitter.com/zilahmusicpub"}>Twitter,</a>{" "}
              </span>
              <span>
                <a
                  href={
                    "https://www.facebook.com/Zilah-Music-Publishing-162465233801098/#"
                  }
                >
                  Facebook,
                </a>{" "}
                Spotify
              </span>{" "}
              and{" "}
              <span>
                <a href={"https://www.youtube.com/user/zilah126/videos"}>
                  Youtube.
                </a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div class="middle-services">
        <div class="service-container">
          <div class="row pt-pb-160">
            <div
              id="text"
              class="black-text"
              style={{
                fontweight: "800",
              }}
            >
              SERVICES
            </div>
            <p
              class="black-text medium-text"
              style={{
                fontweight: "bold",
              }}
            >
              We created our services from the beginning with you in mind. Our
              team is committed to finding the best artists to include in our
              library. This means that you don't have to spend hours sifting
              through horrible music and wasting production precious time.
            </p>
            <br />
            <br />
            <p
              class="black-text medium-text"
              style={{
                fontweight: "bold",
              }}
            >
              {" "}
              We provide the best high-quality sound recording music on demand
              for professional media production of any type. You can find and
              license the right music for your individual production quickly
              just by browsing through our music selection. Anyone can find what
              they're looking for because our discovery process for sync
              licenses is easy and simple for licensors.{" "}
            </p>

            <div class="company-list-section__StyledMediumOnly">
              <div class="company-list-section__StyledBalancedColumns MhgKS">
                <ul class="company-list">
                  <li>
                    <span class="company-list__name company-list__item">
                      Song Data
                    </span>

                    {/* </a> */}
                  </li>
                  <li>
                    <span class="company-list__name company-list__item">
                      Music Publishing
                    </span>
                  </li>
                  <li>
                    <span class="company-list__name company-list__item">
                      Music Licensing
                    </span>
                  </li>
                </ul>
                <ul class="company-list">
                  <li>
                    <span class="company-list__name company-list__item">
                      Music Supervision
                    </span>
                  </li>
                  <li>
                    <span class="company-list__name company-list__item">
                      Digital Downloads Royalties
                    </span>
                  </li>
                  <li>
                    <span class="company-list__name company-list__item">
                      Sound Design
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="service-container pt-pb-160">
        <p class="text-white medium-text services-social pt-90" id="text">
          {" "}
          Digital Distribution{" "}
        </p>
        <p class="text-white medium-text pt-90">
          {" "}
          We bring your music to online digital retailers and other digital
          music service providers. We simultaneously release the music to major
          streaming platforms and through our music catalogue generating fans
          from around the world.{" "}
        </p>
        <p class="text-white medium-text pt-90">Listen On: </p>
        <p class="text-white medium-text pt-90">
          {" "}
          <FaSpotify />
          <a href={"https://www.spotify.com/us/"}>
            <span class="services-social">Spotify</span>
          </a>
          <SiDeezer />
          <a href={"https://www.deezer.com/en/"}>
            <span class="services-social">Deezer</span>
          </a>
          <FaMixcloud />
          <a href={"https://www.mixcloud.com/"}>
            <span class="services-social">Mixcloud</span>
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Services;

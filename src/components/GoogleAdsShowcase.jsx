import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleAdsShowcase = () => {
  return (
    <section id="google-ads" className="google-ads-showcase">
      <div className="google-ads-showcase__content">
        <div className="google-ads-showcase__copy">
          <span className="google-ads-showcase__badge">
            <FaGoogle />
            Google Ads Campaigns
          </span>

          <h2>Performance marketing that turns clicks into real leads.</h2>

          <p>
            I manage Google Ads campaigns with focused targeting, budget control,
            search intent planning, conversion tracking, and performance review
            so every campaign is built around measurable business growth.
          </p>

          <div className="google-ads-showcase__stats">
            <div>
              <span>5.45K</span>
              <p>Clicks tracked</p>
            </div>
            <div>
              <span>60.5K</span>
              <p>Impressions</p>
            </div>
            <div>
              <span>₹12.40</span>
              <p>Avg. CPC</p>
            </div>
          </div>
        </div>

        <div className="google-ads-showcase__visual">
          <img
            src="/google-ads-1.png"
            alt="Google Ads performance dashboard showing clicks, impressions, CPC, and campaign cost"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsShowcase;

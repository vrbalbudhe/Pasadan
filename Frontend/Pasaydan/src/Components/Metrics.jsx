import React, { useEffect, useState, useRef } from "react";
import { FaTrophy, FaBicycle, FaGlobe, FaCommentDots } from "react-icons/fa";

const Metrics = () => {
  const targetValues = {
    awards: 100,
    bicycles: 100,
    globalSupport: 845,
    comments: 15000,
  };

  const [metrics, setMetrics] = useState({
    awards: 0,
    bicycles: 0,
    globalSupport: 0,
    comments: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false); // Control when to start the animation
  const metricsRef = useRef(null); // Reference to the metrics section

  // Intersection Observer to trigger the animation when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    ); // Start the animation when 50% of the element is visible

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [hasAnimated]);

  // Animate the numbers when hasAnimated becomes true
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // Animation duration of 2 seconds
    const intervalTime = 50; // Update interval in milliseconds
    const steps = duration / intervalTime; // Number of steps

    const incrementValues = {
      awards: targetValues.awards / steps,
      bicycles: targetValues.bicycles / steps,
      globalSupport: targetValues.globalSupport / steps,
      comments: targetValues.comments / steps,
    };

    const interval = setInterval(() => {
      setMetrics((prevMetrics) => {
        const nextMetrics = {
          awards: Math.min(
            prevMetrics.awards + incrementValues.awards,
            targetValues.awards
          ),
          bicycles: Math.min(
            prevMetrics.bicycles + incrementValues.bicycles,
            targetValues.bicycles
          ),
          globalSupport: Math.min(
            prevMetrics.globalSupport + incrementValues.globalSupport,
            targetValues.globalSupport
          ),
          comments: Math.min(
            prevMetrics.comments + incrementValues.comments,
            targetValues.comments
          ),
        };

        // Stop the interval when all target values are reached
        if (
          nextMetrics.awards >= targetValues.awards &&
          nextMetrics.bicycles >= targetValues.bicycles &&
          nextMetrics.globalSupport >= targetValues.globalSupport &&
          nextMetrics.comments >= targetValues.comments
        ) {
          clearInterval(interval);
        }

        return nextMetrics;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [hasAnimated, targetValues]);

  return (
    <div
      ref={metricsRef}
      className="md:min-h-screen h-fit flex flex-col py-2 pl-2 pr-2 mt-20 mb-20 md:mt-0 md:mb-0 md:pr-2 md:pl-2 items-center justify-center bg-white text-gray-900"
    >
      <h1 className="text-center text-2xl pl-5 pr-5 md:pr-0 md:pl-0 md:text-4xl font-bold mb-10">
        THE GOAL: 1 MILLION BICYCLES BY 2025
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Award Won */}
        <div className="flex flex-col items-center">
          <FaTrophy className="text-yellow-500 text-4xl md:text-6xl mb-4" />
          <h2 className="text-2xl md:text-5xl font-bold">
            {Math.floor(metrics.awards)}+
          </h2>
          <p className="text-lg">Awards Won</p>
        </div>

        {/* Bicycles Delivered */}
        <div className="flex flex-col items-center">
          <FaBicycle className="text-yellow-500 text-4xl md:text-6xl mb-4" />
          <h2 className="text-2xl md:text-5xl font-bold">
            {Math.floor(metrics.bicycles)}+
          </h2>
          <p className="text-lg">Bicycles Delivered</p>
        </div>

        {/* Global Support */}
        <div className="flex flex-col items-center">
          <FaGlobe className="text-yellow-500 text-4xl md:text-6xl mb-4" />
          <h2 className="text-2xl md:text-5xl font-bold">
            {Math.floor(metrics.globalSupport)}+
          </h2>
          <p className="text-lg">Global Support</p>
        </div>

        {/* Comments */}
        <div className="flex flex-col items-center">
          <FaCommentDots className="text-yellow-500 text-4xl md:text-6xl mb-4" />
          <h2 className="text-2xl md:text-5xl font-bold">
            {Math.floor(metrics.comments)}+
          </h2>
          <p className="text-lg">Comments</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;

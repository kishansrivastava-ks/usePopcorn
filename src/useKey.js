import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    // this use effect is included in the movie details because we want to add the escape key event only when the movie details component is mounted and not anytime else

    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);
      return function () {
        // as soon as the movie details componenet unmounts the event listener will get removed from the document
        // if we dont do this then on every mounting of the movieDetails component, the previous event listener would stay and will listen to the next escape keypress event
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}

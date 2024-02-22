import React from "react";
import PreCode from "./PreCode";

const Checkbox = () => {
  return (
    <div>
      <span className="par-2">
        Docs {">"} <span className="bold color-light capital">Checkbox</span>
      </span>
      <h2 className="head">Checkbox</h2>
      <p className="par-3">
        A control that allows the user to toggle between checked and not
        checked.
      </p>
      <PreCode
        code={`    <div class="form-group-2">
      <input type="checkbox" id="html" />
      <label for="html" >Accept terms and conditions</label>
</div>
      `}
      />
      <h2 className="head-2">Multi Checkbox</h2>
      <PreCode
        code={`    <div class="form-group-2">
      <input type="checkbox" id="html1" />
      <label for="html1" >Email digest, mentions & all activity.</label>
</div>
<div class="form-group-2">
      <input type="checkbox" id="html2" />
      <label for="html2" >Only mentions and comments.</label>
</div>
<div class="form-group-2">
      <input type="checkbox" id="html3" />
      <label for="html3" >Turn off all notifications.</label>
</div>
      `}
      />
      <p className="par-4">
        You can find more on my repo
        <a
          className="gray"
          target="_blank"
          href="https://github.com/NumanHaspolat/shad-wind-ui"
        >
          GitHub
        </a>
      </p>
      <p className="par-4">
        As you can see there is couple of option but dont forgot to use tailwind
        classes to more choices.
      </p>
    </div>
  );
};

export default Checkbox;

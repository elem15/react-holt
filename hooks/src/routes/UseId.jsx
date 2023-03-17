import { useId } from 'react';

function LabelInputPair() {
  const id = useId();
  const id1 = useId();
  return (
    <div style={{ marginBottom: '50px' }}>
      <label htmlFor={id}>
        Click on this label and it'll highlight the input {id}
      </label>
      <br />
      <input type="text" id={id} placeholder={`input id ${id}`} />
      <br />

      <label htmlFor={id1}>
        Click on this label and it'll highlight the input {id1}
      </label>
      <br />
      <input type="text" id={id1} placeholder={`input id ${id1}`} />
    </div>
  );
}

export default function UseIdComponent() {
  return (
    <>
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
    </>
  );
}
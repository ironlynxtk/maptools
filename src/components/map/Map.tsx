import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MapProps {}

const Map: React.SFC<MapProps> = () => {
  return (
    <div>
      <h1 className="title">Map</h1>
      <button className="button is-danger is-outlined">Hello</button>
    </div>
  );
};

export default Map;

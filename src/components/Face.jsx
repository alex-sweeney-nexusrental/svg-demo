export const Face = () => {
  const d = `
  M 20 65,
  q 30 40 60 0,
`;

  return (
    <div>
      <svg width="100" height="100">
          <rect width="100%" height="100%" fill="azure" stroke="black"/>
          <circle cx="50" cy="50" r="44" fill="yellow" stroke-width="5"/>
          <ellipse cx="65" cy="40" rx="5" ry="15" fill="black" stroke-width="1"/>
          <ellipse cx="35" cy="40" rx="5" ry="15" fill="black" stroke-width="1"/>
          <path d={d} stroke="black" strokeWidth={5} fill="none"/>
        </svg>
    </div>
  )
}
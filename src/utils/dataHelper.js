export const getImageData = (data, textData) => 
  textData.map(b => {
    if (typeof(b.image) == 'string')
      b.image = data[b.image].childImageSharp.fixed ? 
        data[b.image].childImageSharp.fixed : 
        data[b.image].childImageSharp.fluid
    return b
  })

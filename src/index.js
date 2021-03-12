module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix == 0 ){
    return []
  }
  let i=0
  let A= []
  for(i=0;i<matrix.length;i++)
  {
    if(matrix[i] == undefined || matrix[i] == 0 ){
      A.push([])
    }
      if(i%2 == 0)
      {
        A=A.concat(matrix[i])
      }
      if(i%2 !=0 )
      {
        A=A.concat(matrix[i].reverse())
      }
    
  }
  return A
}

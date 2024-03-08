const timerPromise = () =>
    new Promise ((resolve, reject) =>
            setTimeout (() => resolve(), 2000))
const asyncFn =async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn()

const getData = (url) => 
    new Promise ((resolve, reject) =>
        fetch (url)
          .then(response => response.json())
          .then(json => resolve(json))
          .catch(error => reject(error))
)

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(derror => console.log(error.message))

const getData = async (url) => {
      const res = await fetch(url)
      const json = await res.json()
      return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'
try {
const data = await getData(url)
console.log(data)
} catch (error) {
    console.log(error.message)
}

    


import SearchBar from './searchbar'
import IconButton from './iconButtons'

function AppBar() {

  return (
    <>
    <div className="flex flex-row p-2 justify-between items-center w-ful">
      <div className='flex flex-row justify-center items-center'>
        <h1 className="text-2xl font-semibold">Discover</h1>
        <br />
        <SearchBar></SearchBar>
      </div>

      <div>
        <IconButton name='Khrisean'></IconButton>
      </div>
    </div>
    </>
  )
}

export default AppBar


import { render, screen } from '@testing-library/react'
import App from '../App'

describe('rendering compoenent RTL', () => {
  it('should render', () => {
    render(<App />)
    const text = screen.getByText('Belajar Unit Testing')
    expect(text).toBeInTheDocument()
  })
})

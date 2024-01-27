import { getProfileLetters } from './get-profile-letters'

describe('get profile letters', () => {
  test('should split by .', () => {
    const res = getProfileLetters({
      email: 'oli.mangosa@gmail.com',
    })

    expect(res).toEqual('OM')
  })

  test('should split by -', () => {
    const res = getProfileLetters({
      email: 'oli.mangosa@gmail.com',
      name: 'Ivan-Olimas',
    })

    expect(res).toEqual('IO')
  })

  test('should split by _', () => {
    const res = getProfileLetters({
      email: 'oli.mangosa@gmail.com',
      name: 'Ivan_Olimas',
    })

    expect(res).toEqual('IO')
  })

  test('should split by space', () => {
    const res = getProfileLetters({
      email: 'oli.mangosa@gmail.com',
      name: 'Ivan Olimas',
    })

    expect(res).toEqual('IO')
  })

  test('should return first 2 letters if no separator', () => {
    const res = getProfileLetters({
      email: 'oli.mangosa@gmail.com',
      name: 'IvanOlimas',
    })

    expect(res).toEqual('IV')
  })
  test('should return first 2 letters if no separator email', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com',
    })

    expect(res).toEqual('AD')
  })
  test('should return email if empty username', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com',
      name: '',
    })

    expect(res).toEqual('AD')
  })

  test('should work with short names', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com',
      name: 'O',
    })

    expect(res).toEqual('O')
  })
})

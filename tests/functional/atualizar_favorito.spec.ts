import { test } from '@japa/runner'

test.group('Atualizar favorito', () => {
  test('', async ({client}) => {
    const resposta=await client.put('/favoritos/1').json (
   { nome: 'Google Atualização',
   url: "http://www.google.com.br",
   importante: true
    })

    resposta.assertStatus(204)
    resposta.assertBodyContains({nome: "Google Aualização"})
    resposta.assertBodyContains({url: "http://www.google.com.br"})
    resposta.assertBodyContains({importante: true})
   
  })
})

import { test } from '@japa/runner'

test.group ('Delet favorito', () => {
 test ('deletar favorito existente',async ({ client }) => {
    const resposta = await client.delete('/favoritos/1')
    resposta.assertStatus(200)
      
    })
  
    test('deletar favorito inexistente', async ({client}) =>{
      const resposta = await client.delete('/favoritos/777')
      resposta.assertStatus(404)
    })
  })
  

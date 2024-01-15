import { supabase } from '../lib/supabaseClient'

const api = {

  async list(table) {
    const { data, error } = await supabase.from(table).select('*').order('id', { ascending: false })
    if (error) throw error
    return data
  },

  async getById(table, id) {
    const { data, error } = await supabase.from(table).select('*').eq('id', id)
    if (error) throw error
    return data[0]
  },

  async post(table, form) {
    const { data, error } = await supabase
    .from(table)
    .insert({
        ...form,
        //user_id:user.value.id
     })
    if (error) throw error
    return data
  },

  async update(table, form) {
     const { data, error } = await supabase
    .from(table)
    .update([{
        ...form,
        //user_id:user.value.id
     }])
     .match({ id: form.id })
    if (error) throw error
    return data[0]
  },

   async remove(table, id) {
     const { data, error } = await supabase
    .from(table)
    .delete()
    .match({ id })
    if (error) throw error
    return data
  }
}
export default api;


/*
 * leetcode #175 combine-two-tables 组合两个表
 * https://leetcode-cn.com/problems/combine-two-tables/description/
 */

select FirstName, LastName, City, State
    from Person
    left join Address on Person.PersonId = Address.PersonId

package com.junico.maplecrm.repository.user;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import com.junico.maplecrm.model.users.User;
import com.nimbusds.oauth2.sdk.util.StringUtils;

public class UserRepositoryImpl implements UserRepositoryCustom {

	@Autowired
	private NamedParameterJdbcTemplate jdbc;

	@Override
	public List<User> search(String filter) {
		String filterParam = StringUtils.isBlank(filter) ? "" : " and (x.name ilike :text or email ilike ':text') ";
		String sql = "select \n" +
				"	x.id ,\n" +
				"	x.name ,\n" +
				"	x.email ,\n" +
				"	x.image_Url,\n" +
				"	STRING_AGG (r.name,', ') roles \n" +
				" from users x \n" +
				" left outer join user_role ru on ru.user_id=x.id \n" +
				" left outer join role r on ru.role_name=r.name \n" +
				" where true \n" +
				filterParam +
				" group by x.id \n" +
				" order by x.name \n";
		MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
		mapSqlParameterSource.addValue("text", "%" + filter + "%");
		return jdbc.query(
				sql,
				mapSqlParameterSource,
				(rs, rowNum) -> {
					int idx = 1;
					User user = new User();
					user.setId(rs.getLong(idx++));
					user.setName(rs.getString(idx++));
					user.setEmail(rs.getString(idx++));
					user.setImageUrl(rs.getString(idx++));
					String rolesSTR = rs.getString(idx++);
					user.setRoles(Arrays.asList(rolesSTR.split(", ")));
					return user;
				});
	}

}

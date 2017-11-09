package sk.rzapach.meteo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Sensor
{
	@Id
	@GeneratedValue
	private int id;
	private double value;
	private String type;
	private Date created;

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public double getValue()
	{
		return value;
	}

	public void setValue(double value)
	{
		this.value = value;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public Date getCreated()
	{
		return created;
	}

	public void setCreated(Date created)
	{
		this.created = created;
	}
}

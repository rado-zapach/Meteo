package sk.rzapach.meteo.model;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface SensorRepository extends PagingAndSortingRepository<Sensor, Integer>
{
    List<Sensor> findAllByTypeOrderByCreatedAsc(@Param(value = "type") String type);
    List<Sensor> findAllByTypeAndCreatedAfterOrderByCreatedAsc(@Param(value = "type") String type, @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) @Param(value = "createdAfter") Date createdAfter);
}

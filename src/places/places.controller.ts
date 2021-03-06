import {
  Body,
  Controller,
  Post,
  UseGuards,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { PlacesService } from './places.service';
import { User } from '../users/user.entity';
import { currentUser } from 'src/users/decorators/current-user.decorator';
import { Serialize } from '../interceptors/serialize.interceptor';
import { PlaceDto } from './dtos/place.dto';
import { ApprovePlaceDto } from './dtos/approve-place.dto';
import { AdminGuard } from 'src/guards/admin.guard';
import { GetPlaceDto } from './dtos/get-place.dto';
import { Place } from 'src/places/entities/place.entity';
import { CategoryDto } from './dtos/category.dto';

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(CreatePlaceDto)
  createPlace(@Body() body: CreatePlaceDto, @currentUser() user: User) {
    console.log(user);
    return this.placesService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approvePlace(@Param('id') id: string, @Body() body: ApprovePlaceDto) {
    return this.placesService.changeApproval(id, body.approved);
  }

  @Get()
  @Serialize(PlaceDto)
  getEstimate(@Query() query: GetPlaceDto) {
      return this.placesService.createQuery(query);
  }


  @Get('places')
  getPlaces() {
      return this.placesService.getPlaces();
  }
}

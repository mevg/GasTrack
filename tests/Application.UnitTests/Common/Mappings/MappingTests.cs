﻿using System.Reflection;
using System.Runtime.CompilerServices;
using AutoMapper;
using GasTrack.Application.Common.Interfaces;
using GasTrack.Application.Common.Models;
using NUnit.Framework;

namespace GasTrack.Application.UnitTests.Common.Mappings;

public class MappingTests
{
    private readonly IConfigurationProvider _configuration;
    private readonly IMapper _mapper;

    public MappingTests()
    {
        _configuration = new MapperConfiguration(config => 
            config.AddMaps(Assembly.GetAssembly(typeof(IApplicationDbContext))));

        _mapper = _configuration.CreateMapper();
    }

    [Test]
    public void ShouldHaveValidConfiguration()
    {
        _configuration.AssertConfigurationIsValid();
    }

    // [TestCase(typeof(TodoList), typeof(TodoListDto))]
    // [TestCase(typeof(TodoItem), typeof(TodoItemDto))]
    // [TestCase(typeof(TodoList), typeof(LookupDto))]
    // [TestCase(typeof(TodoItem), typeof(LookupDto))]
    // [TestCase(typeof(TodoItem), typeof(TodoItemBriefDto))]
    // [Test]
    public void ShouldSupportMappingFromSourceToDestination(Type source, Type destination)
    {
        var instance = GetInstanceOf(source);

        _mapper.Map(instance, source, destination);
    }

    private object GetInstanceOf(Type type)
    {
        if (type.GetConstructor(Type.EmptyTypes) != null)
            return Activator.CreateInstance(type)!;

        // Type without parameterless constructor
        return RuntimeHelpers.GetUninitializedObject(type);
    }
}